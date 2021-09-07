  const truncateString = (str, length, ending) => {
    let truncated = str.substring(0, length);
    return truncated + ending;
  };

  export default truncateString