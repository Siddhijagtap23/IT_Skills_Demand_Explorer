
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const API = 'http://127.0.0.1:8000/api';

function App() {
  const [page, setPage] = useState('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [datasets, setDatasets] = useState([]);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [skillDemand, setSkillDemand] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const headers = {
    Authorization: `Token ${token}`,
  };

  useEffect(() => {
    if (token && page === 'dashboard') {
      loadDatasets();
    }
  }, [token, page]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      if (page === 'register') {
        await axios.post(`${API}/auth/register/`, {
          username,
          email,
          password,
        });

        setMessage('Registration successful! Please login.');
        setPage('login');
      } else {
        const response = await axios.post(`${API}/auth/login/`, {
          username,
          password,
        });

        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        setPage('dashboard');
        setMessage('Login successful!');
      }
    } catch (error) {
      setMessage(JSON.stringify(error.response?.data || 'Something went wrong.'));
    } finally {
      setLoading(false);
    }
  };

  const loadDatasets = async () => {
    try {
      const response = await axios.get(`${API}/datasets/`, { headers });
      setDatasets(response.data);
    } catch {
      setMessage('Could not load datasets.');
    }
  };

  const uploadDataset = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a CSV file.');
      return;
    }

    const formData = new FormData();
    formData.append('name', file.name);
    formData.append('file', file);

    setLoading(true);

    try {
      await axios.post(`${API}/datasets/`, formData, { headers });
      setMessage('Dataset uploaded successfully!');
      setFile(null);
      await loadDatasets();
    } catch (error) {
      setMessage(JSON.stringify(error.response?.data || 'Upload failed.'));
    } finally {
      setLoading(false);
    }
  };

  const loadDashboard = async (id) => {
    setLoading(true);
    setMessage('');

    try {
      const dashboardResponse = await axios.get(
        `${API}/analytics/dashboard/?dataset_id=${id}`,
        { headers }
      );

      const skillsResponse = await axios.get(
        `${API}/analytics/skill-demand/?dataset_id=${id}`,
        { headers }
      );

      setData(dashboardResponse.data);
      setSkillDemand(skillsResponse.data.skills || []);
    } catch (error) {
      setMessage(
        JSON.stringify(error.response?.data || 'Could not load analytics.')
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API}/auth/logout/`, {}, { headers });
    } catch {
      // Clear local session even if the API request fails.
    }

    localStorage.removeItem('token');
    setToken('');
    setData(null);
    setSkillDemand([]);
    setDatasets([]);
    setPage('login');
    setMessage('');
  };

  const chartData = {
    labels: skillDemand.map((item) => item.skill),
    datasets: [
      {
        label: 'Skill Demand (%)',
        data: skillDemand.map((item) => item.demand_percentage),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Most In-Demand IT Skills',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Demand Percentage (%)',
        },
      },
    },
  };

  if (token && page === 'dashboard') {
    return (
      <div className="app">
        <header>
          <h2>IT Skills Demand Explorer</h2>
          <button onClick={logout}>Logout</button>
        </header>

        <main>
          <h1>Dashboard</h1>
          <p>Explore the most in-demand IT skills from job postings.</p>

          <section className="panel">
            <h2>Upload Dataset</h2>

            <form onSubmit={uploadDataset}>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <button type="submit" disabled={loading}>
                {loading ? 'Please wait...' : 'Upload CSV'}
              </button>
            </form>
          </section>

          <section className="panel">
            <h2>Your Datasets</h2>

            {datasets.map((item) => (
              <div className="dataset" key={item.id}>
                <span>
                  {item.name} ({item.total_records} records)
                </span>

                <button
                  onClick={() => loadDashboard(item.id)}
                  disabled={loading}
                >
                  View Dashboard
                </button>
              </div>
            ))}

            {datasets.length === 0 && <p>No datasets uploaded yet.</p>}
          </section>

          {data && (
            <>
              <h2>Analytics Overview</h2>

              <div className="stats">
                <div className="stat">
                  <h3>{data.total_jobs}</h3>
                  <p>Total Jobs</p>
                </div>

                <div className="stat">
                  <h3>{data.total_companies}</h3>
                  <p>Companies</p>
                </div>

                <div className="stat">
                  <h3>{data.total_roles}</h3>
                  <p>Job Roles</p>
                </div>

                <div className="stat">
                  <h3>
                    ₹{Math.round(data.average_salary).toLocaleString('en-IN')}
                  </h3>
                  <p>Average Salary</p>
                </div>
              </div>

              <section className="panel">
                <h2>Top 10 In-Demand Skills</h2>

                {data.top_skills.map((skill) => (
                  <div className="skill" key={skill.skill}>
                    <span>{skill.skill}</span>
                    <strong>{skill.job_count} jobs</strong>
                  </div>
                ))}
              </section>

              <section className="panel">
                <h2>Skill Demand Analysis</h2>

                {skillDemand.length > 0 ? (
                  <>
                    <div className="chart-container">
                      <Bar data={chartData} options={chartOptions} />
                    </div>

                    <h3>Skill Demand Details</h3>

                    <div className="demand-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Skill</th>
                            <th>Job Count</th>
                            <th>Demand (%)</th>
                          </tr>
                        </thead>

                        <tbody>
                          {skillDemand.map((item) => (
                            <tr key={item.skill}>
                              <td>{item.skill}</td>
                              <td>{item.job_count}</td>
                              <td>
                                {Number(item.demand_percentage).toFixed(2)}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <p>No skill demand data available.</p>
                )}
              </section>
            </>
          )}

          {message && <p className="message">{message}</p>}
        </main>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleAuth}>
        <h1>IT Skills Demand Explorer</h1>
        <p>Discover the skills employers demand.</p>

        <h2>{page === 'login' ? 'Welcome Back' : 'Create Account'}</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {page === 'register' && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}

        <input
          type="password"
          placeholder="Password (minimum 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading
            ? 'Please wait...'
            : page === 'login'
              ? 'Login'
              : 'Register'}
        </button>

        {message && <p className="message">{message}</p>}

        <p>
          {page === 'login'
            ? "Don't have an account?"
            : 'Already registered?'}

          <button
            type="button"
            className="link-button"
            onClick={() => {
              setMessage('');
              setPage(page === 'login' ? 'register' : 'login');
            }}
          >
            {page === 'login' ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
}

export default App;
