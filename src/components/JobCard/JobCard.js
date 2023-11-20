import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const JobCard = (job) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={job.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
        <Button size="small">Know More</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
