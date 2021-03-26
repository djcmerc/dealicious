import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, TextField } from '@material-ui/core';

interface AddFilterDialogProps {
  open: boolean;
  close: () => void;
  addFilter: (tagToAdd: string) => void;
}

export const AddFilterDialog = ({
  open,
  close,
  addFilter
}: AddFilterDialogProps) => {
  const classes = useStyles();
  let textBoxTag = '';

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    textBoxTag = event.target.value;
  };

  const handleAddFilterItem = (value: string) => {
    addFilter(value);
  };

  return (
    <>
      <Dialog open={open} onClose={close}>
        <DialogTitle>Add topic filter</DialogTitle>
        <TextField variant="outlined" onChange={handleTextFieldChange} />
        <Button onClick={() => handleAddFilterItem(textBoxTag)}>Add</Button>
      </Dialog>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));