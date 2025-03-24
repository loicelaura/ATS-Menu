import { Grid, Paper, Typography } from '@mui/material';

const DashboardStats = ({ stats }) => {
  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h5">{stat.value}</Typography>
            <Typography variant="body2">{stat.label}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardStats;