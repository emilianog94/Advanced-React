const Page = (props) => {

  const {children} = props;

  return(
    <div class="contenedor-mainnn">
      <p>I'm the Page Component</p>
      {children}
    </div>
  )
}

export default Page;
