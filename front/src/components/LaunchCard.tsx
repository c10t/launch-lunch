import * as React from 'react';

import  { withStyles, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

type ClassNames = keyof typeof styles;

interface LaunchCardProps extends WithStyles<typeof styles> {
  id: number;
  title: string;
  text: string;
}

const LaunchCard: React.SFC<{data: LaunchCardProps}> = ({ data }) => {
  const { classes } = data;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            lunch
          </Typography>
          <Typography variant="headline" component="h2">
            {data.title}
          </Typography>
          <Typography component="p">
            {data.text}<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Launch it</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default LaunchCard;
