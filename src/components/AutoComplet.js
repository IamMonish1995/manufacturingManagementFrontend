import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog() {
  const [designCode, setDesignCode] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      designCode: '',
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    designCode: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setDesignCode({
      designCode: dialogValue.designCode,
    });
    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={designCode}
        onChange={(event, newDesignCode) => {
          if (typeof newDesignCode === 'string') {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                designCode: newDesignCode,
              });
            });
          } else if (newDesignCode && newDesignCode.inputValue) {
            toggleOpen(true);
            setDialogValue({
              designCode: newDesignCode.inputValue,
            });
          } else {
            setDesignCode(newDesignCode);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              designCode: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={top100DesignCodes}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.designCode;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.designCode}</li>}
        sx={{ width: 150 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Enter Design Code" style={{ width: 150 }} />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new design code</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any design code in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="designCode"
              value={dialogValue.designCode}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  designCode: event.target.value,
                })
              }
              label="Design Code"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

// Top design codes
const top100DesignCodes = [
  { designCode: 'A001' },
  { designCode: 'A002' },
  // Add more design codes as needed
];
