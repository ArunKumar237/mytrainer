import React from 'react'
import './Stories.css'

const data = [
  {
    "id": "1",
    "profileImg": "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    "post": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente quod molestias mollitia assumenda hic omnis voluptates fugit perspiciatis quas enim tempora velit sit maxime, deserunt, veniam, ad sunt suscipit?",
    "trainerName": "John Doe",
    "country": "USA",
    "state": "california",
    "batchNo": "6",
    "courseName": "Python Fullstack"
  },
  {
    "id": "2",
    "profileImg": "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    "post": "https://youtu.be/g9JsB48tyvM?si=IDZ6sffGpjfvRYrt",
    "trainerName": "John Doe",
    "country": "USA",
    "state": "california",
    "batchNo": "6",
    "courseName": "Python Fullstack"
  },
  {
    "id": "3",
    "profileImg": "https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360",
    "post": "src\\assets\\istockphoto-1354397311-2048x2048.jpg",
    "trainerName": "John Doe",
    "country": "USA",
    "state": "california",
    "batchNo": "6",
    "courseName": "Python Fullstack"
  },
]


const Stories = () => {
  return (
    <div className='container-md'>
      {data.map((row) => (
        <div key={row.id} className='my-4'>
          <div className="row justify-content-center py-2">
            <div className="col-2 text-center">
              <img id='profile-pic' className='rounded-circle object-fit-cover' src="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360" alt="" />
            </div>
            {
              row.post.includes("https://youtu.be/") && (
                <div className="col-9">
                  <div style={{ backgroundColor: "#a4ffa4" }} className='rounded p-3'>
                    <div className='rounded overflow-hidden border-black mx-auto'>
                      <iframe className='rounded' style={{ height: "25.5rem", width: "100%" }} src={row.post.replace("https://youtu.be/", "https://www.youtube.com/embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <h3 className='my-1'>{row.trainerName}</h3>
                    <div className='d-flex gap-3'>
                      <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Country: {row.country}</p>
                      <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>State: {row.state}</p>
                      <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Batch Number: {row.batchNo}</p>
                      <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Course Name: {row.courseName}</p>
                    </div>
                    <div className='d-flex gap-1 align-items-center'>
                      <span>4&nbsp;</span>
                      <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                      <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                      <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                      <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                    </div>
                  </div>
                </div>
              )}
            {
              !row.post.includes("https://youtu.be/") && (
                row.post.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                  <div className="col-9">
                    <div style={{ backgroundColor: "#a4ffa4" }} className='rounded p-3'>
                      <div className='rounded overflow-hidden border-black mx-auto'>
                        <img style={{height:"20rem"}} src={row.post} alt="" />
                      </div>
                      <h3 className='my-1'>{row.trainerName}</h3>
                      <div className='d-flex gap-3'>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Country: {row.country}</p>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>State: {row.state}</p>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Batch Number: {row.batchNo}</p>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Course Name: {row.courseName}</p>
                      </div>
                      <div className='d-flex gap-1 align-items-center'>
                        <span>4&nbsp;</span>
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-9">
                    <div style={{ backgroundColor: "#a4ffa4" }} className='rounded p-3'>
                      <div className='rounded overflow-hidden border-black mx-auto'>
                        <p><q>{row.post}</q></p>
                      </div>
                      <h3 className='my-1'>{row.trainerName}</h3>
                      <div className='d-flex gap-3'>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Country: {row.country}</p>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>State: {row.state}</p>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Batch Number: {row.batchNo}</p>
                        <p style={{ fontSize: ".8rem" }} className='py-1 my-2 px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Course Name: {row.courseName}</p>
                      </div>
                      <div className='d-flex gap-1 align-items-center'>
                        <span>4&nbsp;</span>
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img style={{ height: "1rem" }} src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
      ))}
    </div>

  )
}

export default Stories