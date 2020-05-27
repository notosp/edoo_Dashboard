import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Stepper, Step, StepLabel, StepConnector, Typography, Paper, Button, Grid, TextField, TextareaAutosize } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import Content from '../../../../components/Content';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor: '#02CBB5'
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#02CBB5'
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#02CBB5',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: '#02CBB5',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btnNext: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    backgroundColor:'#02CBB5',
    color:'#FFF',
    '&:hover': {
      background: "rgb(12, 144, 129)",
    },
  },
  btnBack: {
    marginTop: theme.spacing(4),
    backgroundColor:'#FFF',
    color:'#00000',
    border: 'solid 2px #A9A9A9'  
  },
}));

function getSteps() {
  return ['Identitas Penerbit', 'Kesepakatan Kerjasama', 'Akun Bank Perusahaan'];
}

const currencies = [
  {
    label: 'Grup 1',
  },
];

export default function AddPenerbit() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [currency, setCurrency] = React.useState('EUR');
  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };


  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="nama"
                    name="nama"
                    label="Nama Lengkap Penerbit"
                    placeholder=" Masukkan Nama Lengkap Penerbit"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="Grup-penerbit"
                    select
                    label="Grup Penerbit"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Kosongkan jika bukan merupakan grup penerbit"
                    variant="outlined"
                    fullWidth
                    size="small"
                  >
                    {currencies.map(option => (
                      <option>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <div className="input-group ml-2 pl-1 mr-2 pr-1">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input"
                      aria-describedby="inputGroupFileAddon01" />
                    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                  </div>
                </div>
                <Grid item xs={12} sm={6}>
                  <TextareaAutosize
                    id="tentang"
                    placeholder="Masukkan Tentang Penerbit"
                    style={{ width: '100%', height: '80px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextareaAutosize
                    id="alamat"
                    placeholder="Masukkan Alamat Lengkap Kantor Penerbit"
                    style={{ width: '100%', height: '80px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="kota"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="kota/kabupaten"
                    label="Kota/Kabupaten Asal Penerbit"
                    placeholder="Masukkan Kota Asal Penerbit"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="telpon"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="telpon"
                    placeholder="Masukkan Nomor telepon Penerbit"
                    label="Nomer Telepon Kantor"
                    fullWidth
                    size="small"
                    variant="outlined"
                    helperText="(Kode wilayah) - 9999 - 9999"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="email"
                    placeholder="Masukkan Email Yang Valid"
                    label="Nomer Telepon Kantor"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    id="nofax"
                    name="nofax"
                    placeholder="Masukkan Nomer FAX"
                    label="Nomer Fax"
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    id="website"
                    name="wesite"
                    placeholder="Website Penerbit"
                    label="Website Kantor"
                    fullWidth
                    variant="outlined"
                    size="small"
                    helperText="Contoh: http://website.com"
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        );
      case 1:
        return (
          <div>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="nominal"
                    label="Masukan Nominal (%)"
                    placeholder="Masukkan Nominal (hanya angka)"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="pajak"
                    select
                    label="Biaya Pajak Pertambahan Nilai (Ppn)"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true
                    }}
                    variant="outlined"
                    fullWidth
                    size="small"
                  >
                    {currencies.map(option => (
                      <option>{option.label}</option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </React.Fragment>
          </div>
        );
      case 2:
        return (
          <div>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="norek"
                    label="Nomor Rekening"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    placeholder="Masukkan Nomor Rekening"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="namaBank"
                    label="Nama Bank Asal Rekening"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    placeholder="Masukkan Nama Bank"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="identitas"
                    label="Identitas Pemilik Rekening"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    placeholder="Masukkan Nama Pemilik Rekening"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="status"
                    select
                    label="Status Penerbit"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true
                    }}
                    variant="outlined"
                    fullWidth
                    size="small"
                  >
                    {currencies.map(option => (
                      <option>{option.label}</option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </React.Fragment>
          </div>
        );
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <div>
      <main className={classes.root}>
        <Paper className={classes.paper}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
          {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Terimakasih data sudah tersubmit
            </Typography>
          </div>
          ) : (
            
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className={classes.buttons}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.btnBack}>
                Back
              </Button>

              <Button
                variant="contained"
                onClick={handleNext}
                type='submit'
                className={classes.btnNext}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
          )}
          </div>
        </Paper>
      </main>
    </div>
  );
}
