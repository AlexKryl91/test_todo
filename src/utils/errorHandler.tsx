function errorHandler(err) {
  alert(
    err.name === 'AbortError' ? 'Server response waiting time is exceeded' : err
  );
}

export default errorHandler;
