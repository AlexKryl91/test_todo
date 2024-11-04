type TError = { name?: string };

function errorHandler(err: TError) {
  alert(
    err.name === 'AbortError' ? 'Server response waiting time is exceeded' : err
  );
}

export default errorHandler;
