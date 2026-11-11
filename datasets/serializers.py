
import pandas as pd
from rest_framework import serializers
from .models import Dataset


class DatasetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dataset
        fields = [
            'id',
            'name',
            'file',
            'total_records',
            'uploaded_at'
        ]
        read_only_fields = ['id', 'total_records', 'uploaded_at']

    def validate_file(self, file):
        if not file.name.endswith('.csv'):
            raise serializers.ValidationError(
                'Only CSV files are allowed.'
            )

        try:
            df = pd.read_csv(file)
        except Exception:
            raise serializers.ValidationError(
                'Invalid CSV file.'
            )

        required_columns = [
            'job_title',
            'role',
            'company',
            'location',
            'experience_min',
            'experience_max',
            'salary_min',
            'salary_max',
            'skills',
            'posted_date'
        ]

        missing = set(required_columns) - set(df.columns)

        if missing:
            raise serializers.ValidationError(
                f'Missing columns: {", ".join(missing)}'
            )

        if df.empty:
            raise serializers.ValidationError(
                'CSV file is empty.'
            )

        self.total_records_count = len(df)
        file.seek(0)
        return file

    def create(self, validated_data):
        validated_data['uploaded_by'] = self.context['request'].user
        validated_data['total_records'] = self.total_records_count
        return Dataset.objects.create(**validated_data)
