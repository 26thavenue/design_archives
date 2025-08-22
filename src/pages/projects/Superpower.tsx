

const objArr=[
    {
        img:"https://plus.unsplash.com/premium_photo-1754433115781-a0f536b10258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        title:"Metabolic Health"
    },
    {
        img:"https://images.unsplash.com/photo-1755450668907-a0fdc661c043?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
        title:"Thyroid Health"
    },
    {
        img:"https://images.unsplash.com/photo-1755450668907-a0fdc661c043?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
        title:"Nutrients "
    },
    {
        img:"https://images.unsplash.com/photo-1755001244508-58fcc65797ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
        title:"Liver Health"
    },
    {
        img:"https://images.unsplash.com/photo-1754756356063-103a6019f346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
        title:"Kidney Health"
    },
    {
        img:"https://plus.unsplash.com/premium_photo-1755448541641-b3cd228251fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
        title:"Inflammation"
    }
]

const Superpower = () => {
  return (
    <div className=" bg-gray-100 p-40  w-full h-full min-w-[100dvw] min-h-[100dvh]">
      <p>Superpower</p>

    <div className="h-[250px] bg-red-100 overflow-y-auto max-w-fit ">
        {objArr.map((i,k) =>(
        <div tabIndex={k} className=" my-10 flex items-center gap-4">
         <img src={i.img} className="h-8 w-8 rounded-sm"/>
         <p className="text-sm">{i.title}</p>
        </div>
      ))}
   </div>
      
    </div>
  )
}

export default Superpower
