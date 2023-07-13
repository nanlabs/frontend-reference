import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    select: {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
      color: theme.palette.primary.main,
    },
    icon: {
      fill: theme.palette.primary.main,
    },
    root: {
      color: theme.palette.primary.main,
    },
  };
});

const CustomSelect = ({ onChange, items, id, title }) => {
  const { classes } = useStyles();
  return (
    <FormControl>
      <InputLabel className={classes.root} id={id}>
        {title}
      </InputLabel>
      <Select
        className={classes.select}
        inputProps={{ classes: { icon: classes.icon, root: classes.root } }}
        onChange={(e) => onChange(e, id)}
        labelId={id}
        id={id}
        label={title}
      >
        {items.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
