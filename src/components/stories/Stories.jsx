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
          <div className="row py-2">
            <div className="d-none d-md-block col-md-3 p-0 text-center">
              <img id='profile-pic' className='rounded-circle object-fit-cover' src="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360" alt="" />
            </div>
            <div className="col-11 mx-auto col-md-9 p-0">
              {
                row.post.includes("https://youtu.be/") && (
                  <div className="col">
                    <div style={{ backgroundColor: "#a4ffa4" }} className='rounded p-3'>
                      <div className='rounded overflow-hidden'>
                        <iframe className='rounded embedFrame' src={row.post.replace("https://youtu.be/", "https://www.youtube.com/embed/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <div className="d-flex my-2 my-md-0">
                        <img className='smallImg d-block d-md-none me-2 rounded-circle object-fit-cover' src="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360" alt="" />
                        <h3 className='my-1'>{row.trainerName}</h3>
                      </div>
                      <div className='d-flex mt-2 flex-wrap gap-1 m-0 flex-md-row '>
                        <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Country: {row.country}</p>
                        <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>State: {row.state}</p>
                        <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Batch Number: {row.batchNo}</p>
                        <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Course Name: {row.courseName}</p>
                      </div>
                      <div className='d-flex align-items-center gap-1'>
                        <p className="ratingNum">4</p>
                        <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                      </div>
                    </div>
                  </div>
                )}
              {
                !row.post.includes("https://youtu.be/") && (
                  row.post.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                    <div className="col">
                      <div style={{ backgroundColor: "#a4ffa4" }} className='rounded p-3'>
                        <div className='rounded overflow-hidden mx-auto'>
                          <img style={{width:"100%"}} className='object-fit-contain' src={row.post} alt="" />
                        </div>
                        <div className="d-flex my-2 my-md-0">
                          <img className='smallImg d-block d-md-none me-2 rounded-circle object-fit-cover' src="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360" alt="" />
                          <h3 className='my-1'>{row.trainerName}</h3>
                        </div>
                        <div className='d-flex mt-2 flex-wrap gap-1 m-0 flex-md-row '>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Country: {row.country}</p>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>State: {row.state}</p>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Batch Number: {row.batchNo}</p>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Course Name: {row.courseName}</p>
                        </div>
                        <div className='d-flex align-items-center gap-1'>

                          <p className="ratingNum">4</p>
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col">
                      <div style={{ backgroundColor: "#a4ffa4" }} className='rounded p-3'>
                        <div className='rounded overflow-hidden mx-auto'>
                          <p>{row.post}</p>
                        </div>
                        <div className="d-flex my-2 my-md-0">
                          <img className='smallImg d-block d-md-none me-2 rounded-circle object-fit-cover' src="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360" alt="" />
                          <h3 className='my-1'>{row.trainerName}</h3>
                        </div>
                        <div className='d-flex mt-2 flex-wrap gap-1 flex-md-row '>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Country: {row.country}</p>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>State: {row.state}</p>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Batch Number: {row.batchNo}</p>
                          <p className='info py-1 my-0  px-2 text-warning border border-1 rounded bg-white fw-medium border-warning'>Course Name: {row.courseName}</p>
                        </div>
                        <div className='d-flex align-items-center gap-1'>

                          <p className="ratingNum">4</p>
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                          <img className='blackstarsize' src="https://img.icons8.com/plumpy/24/filled-star.png" alt="" />
                        </div>
                      </div>
                    </div>
                  )
                )
              }
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Stories