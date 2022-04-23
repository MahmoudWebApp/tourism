
const Heading = ({title1,title2}) => {
  return (
    <div className="text-center mb-12">
    <p className="text-4xl font-bold text-gray-600 dark:text-gray-100 mb-3">
     {title1}
    </p>
    <p className="text-gray-600 dark:text-gray-100">
      {title2}
    </p>
  </div>
  )
}

export default Heading;