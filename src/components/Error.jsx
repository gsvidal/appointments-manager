function Error({children}) {
  return(
    <p className="bg-red-500 text-white font-bold p-4 m-4 rounded-lg">
      {children}
    </p>
  );
}

export default Error;