
import pandas as pd
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from datasets.models import Dataset


class SkillDemandView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        dataset_id = request.query_params.get('dataset_id')

        if not dataset_id:
            return Response(
                {'error': 'dataset_id is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            dataset = Dataset.objects.get(
                id=dataset_id,
                uploaded_by=request.user
            )

            df = pd.read_csv(dataset.file.path)

            role = request.query_params.get('role')

            if role:
                df = df[df['role'].str.lower() == role.lower()]

            total_jobs = len(df)

            if total_jobs == 0:
                return Response({
                    'total_jobs': 0,
                    'skills': []
                })

            skills = (
                df['skills']
                .dropna()
                .str.split(',')
                .explode()
                .str.strip()
            )

            demand = (
                skills.value_counts()
                .reset_index()
            )

            demand.columns = ['skill', 'job_count']
            demand['demand_percentage'] = (
                demand['job_count'] / total_jobs * 100
            ).round(2)

            return Response({
                'total_jobs': total_jobs,
                'role': role or 'All Roles',
                'skills': demand.to_dict(orient='records')
            })

        except Dataset.DoesNotExist:
            return Response(
                {'error': 'Dataset not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )

class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        dataset_id = request.query_params.get('dataset_id')

        if not dataset_id:
            return Response(
                {'error': 'dataset_id is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            dataset = Dataset.objects.get(
                id=dataset_id,
                uploaded_by=request.user
            )

            df = pd.read_csv(dataset.file.path)

            skills = (
                df['skills']
                .dropna()
                .str.split(',')
                .explode()
                .str.strip()
            )

            top_skills = skills.value_counts().head(10)

            salary = (
                (df['salary_min'] + df['salary_max']) / 2
            ).dropna()

            return Response({
                'total_jobs': int(len(df)),
                'total_companies': int(df['company'].nunique()),
                'total_roles': int(df['role'].nunique()),
                'average_salary': round(float(salary.mean()), 2)
                    if not salary.empty else 0,
                'top_skills': [
                    {
                        'skill': skill,
                        'job_count': int(count)
                    }
                    for skill, count in top_skills.items()
                ]
            })

        except Dataset.DoesNotExist:
            return Response(
                {'error': 'Dataset not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
