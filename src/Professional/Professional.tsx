
import { Input } from "antd";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

interface Comment {
  id: number;
  text: string;
}

interface Video {
  id: number;
  name: string;
  VideoSrc: string;
  category: string;
  comments: Comment[];
}

interface GroupedVideos {
  [key: string]: Video[];
}


const Professional = () => {
  const initialVideos: Video[] = [
    {
      id: 1,
      name: 'Chicken Biryani',
      VideoSrc: '/assets/chicken-biriyani.mp4',
      category: 'Chicken',
      comments: [],
    },
    {
      id: 2,
      name: 'Chicken 65',
      VideoSrc: '/assets/chicken-65.mp4',
      category: 'Chicken',
      comments: [],
    },
    {
      id: 3,
      name: 'Chicken Soup',
      VideoSrc: '/assets/chicken-soup.mp4',
      category: 'Chicken',
      comments: [],
    },
    {
      id: 4,
      name: 'Chicken Curry',
      VideoSrc: '/assets/chicken-Curry.mp4',
      category: 'Chicken',
      comments: [],
    },
    {
      id: 5,
      name: 'Chicken FriedRice',
      VideoSrc: '/assets/chicken-Friedrice.mp4',
      category: 'Chicken',
      comments: [],
    },
    {
      id: 6,
      name: 'Medhu Vada',
      VideoSrc: '/assets/medhu-vada.mp4',
      category: 'Vada',
      comments: [],
    },
    {
      id: 7,
      name: 'Keera Vada',
      VideoSrc: '/assets/keera-vada.mp4',
      category: 'Vada',
      comments: [],
    },
    {
      id: 8,
      name: 'Paruppu Vada',
      VideoSrc: '/assets/paruppu-vada.mp4',
      category: 'Vada',
      comments: [],
    },
    {
      id: 9,
      name: 'Curd Vada',
      VideoSrc: '/assets/curd-vada.mp4',
      category: 'Vada',
      comments: [],
    },
    {
      id: 10,
      name: 'Sambar Vada',
      VideoSrc: '/assets/sambar-vada.mp4',
      category: 'Vada',
      comments: [],
    },
    {
      id: 11,
      name: 'Home Made Pizza',
      VideoSrc: '/assets/homemade-pizza.mp4',
      category: 'Pizza',
      comments: [],
    },
    {
      id: 12,
      name: 'Chicken Pizza',
      VideoSrc: '/assets/chicken-pizza.mp4',
      category: 'Pizza',
      comments: [],
    },
    {
      id: 13,
      name: 'Newyork Pizza',
      VideoSrc: '/assets/newyork-pizza.mp4',
      category: 'Pizza',
      comments: [],
    },
    {
      id: 14,
      name: 'Italian Pizza',
      VideoSrc: '/assets/italian-pizza.mp4',
      category: 'Pizza',
      comments: [],
    },
    {
      id: 15,
      name: 'Corn Cheese Pizza',
      VideoSrc: '/assets/corn-pizza.mp4',
      category: 'Pizza',
      comments: [],
    },

    {
      id: 16,
      name: 'Mutton 65',
      VideoSrc: '/assets/mutton-65.mp4',
      category: 'Mutton',
      comments: [],
    },
    {
      id: 17,
      name: 'Mutton Biryani',
      VideoSrc: '/assets/mutton-biryani.mp4',
      category: 'Mutton',
      comments: [],
    },
    {
      id: 18,
      name: 'Mutton Curry',
      VideoSrc: '/assets/mutton-curry.mp4',
      category: 'Mutton',
      comments: [],
    },
    {
      id: 19,
      name: 'Mutton Friedrice',
      VideoSrc: '/assets/mutton-friedrice.mp4',
      category: 'Mutton',
      comments: [],
    },
    {
      id: 20,
      name: 'Mutton Soup',
      VideoSrc: '/assets/mutton-soup.mp4',
      category: 'Mutton',
      comments: [],
    },
    {
      id: 21,
      name: 'Pork Rice',
      VideoSrc: '/assets/pork-rice.mp4',
      category: 'Pork',
      comments: [],
    },

    {
      id: 22,
      name: 'Vegan Meals',
      VideoSrc: '/assets/vegan-meals.mp4',
      category: 'Vegan',
      comments: [],
    },

    {
      id: 23,
      name: 'Vegan 6days Food',
      VideoSrc: "/assets/Vegan-6day's.mp4",
      category: 'Vegan',
      comments: [],
    },
    {
      id: 24,
      name: 'Vegan Wrap',
      VideoSrc: '/assets/veg-wrap.mp4',
      category: 'Vegan',
      comments: [],
    },
    {
      id: 25,
      name: 'Vegetable Crossrole',
      VideoSrc: '/assets/vegetable-crossrole.mp4',
      category: 'Vegan',
      comments: [],
    },
    {
      id: 26,
      name: 'Vegan BreakFast',
      VideoSrc: '/assets/english-breakfast.mp4',
      category: "Vegan",
      comments: [],
    },

  ];


  const [videos, setVideos] = useState<Video[]>(initialVideos);
  const [newVideo, setNewVideo] = useState<Video>({
    id: 0,
    name: "",
    VideoSrc: "",
    category: "",
    comments: [],
  });

  const [videoFile, setVideoFile] = useState<File | null>(null);

  // Function to handle video file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ["video/mp4", "video/x-m4v", "video/*"];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Please upload a video file.");
        return;
      }

      setVideoFile(file);
      // console.log(setVideoFile);

      // Create a URL for the selected file
      setNewVideo({ ...newVideo, VideoSrc: URL.createObjectURL(file) });

    }
  };

  // Function to add a video
  const addVideo = () => {
    if (!newVideo.name || !newVideo.VideoSrc || !newVideo.category) {
      alert("Please provide all details for the new video!");
      return;
    }

    setVideos((prevVideos) => [
      ...prevVideos,
      {
        ...newVideo,
        id: Date.now(), 
      },
    ]);
    setNewVideo({ id: 0, name: "", VideoSrc: "", category: "", comments: [] });
    setVideoFile(null); 
  };

  // Function to delete a video by ID
  const deleteVideo = (id: number) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  // Function to add a comment
  const addComment = (videoId: number, commentText: string) => {
    if (!commentText.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId
          ? {
            ...video,
            comments: [
              ...video.comments,
              { id: Date.now(), text: commentText },
            ],
          }
          : video
      )
    );
  };

  // Function to delete a comment
  const deleteComment = (videoId: number, commentId: number) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId
          ? {
            ...video,
            comments: video.comments.filter(
              (comment) => comment.id !== commentId
            ),
          }
          : video
      )
    );
  };

  // Group videos by category
  const groupedVideos: GroupedVideos = videos.reduce(
    (acc, video) => {
      if (!acc[video.category]) {
        acc[video.category] = [];
      }
      acc[video.category].push(video);
      return acc;
    },
    {} as GroupedVideos
  );

  return (
    <>
      <section className="section-home-1">
        <Container>
          <div>
            <h2 className="head-txt">Video's</h2>
            {/* Render Videos by Category */}

            {Object.keys(groupedVideos).map((category) => (
              <div className="video-category" key={category}>
                <h3 className="category-title">{category} Recipes:</h3>
                <div className="row pt-3 video-row">
                  {groupedVideos[category].map((item) => (
                    <div
                      className="col-lg-4 col-md-4 col-sm-12 col-xs-12"
                      key={item.id}
                    >
                      <div className="video-item">
                        <video className="video-professional" controls>
                          <source src={item.VideoSrc} type="video/mp4" />
                        </video>
                        <p className="para-txt text-center pt-2">{item.name}</p>
                        <Button onClick={() => deleteVideo(item.id)} className="btn-5">
                          Delete Video
                        </Button>

                        {/* Comments Section */}
                        <div className="comments-section mt-4">
                          <h5>Comments:</h5>
                          <ul>
                            {item.comments.map((comment) => (
                              <li key={comment.id}>
                                {comment.text}
                                <Button
                                  variant="link"
                                  onClick={() => deleteComment(item.id, comment.id)}
                                >
                                  Delete
                                </Button>
                              </li>
                            ))}
                          </ul>
                          <Input
                            placeholder="Add a comment"
                            onPressEnter={(e) =>
                              addComment(item.id, (e.target as HTMLInputElement).value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form to Add New Video */}
          <div className="Add-video">
            <h2 className="head-txt">Add a New Video</h2>
            <div className="video-center">
              <div className="add-video">
                <label className="label">ReceipeName</label>
                <Input
                  type="text"
                  placeholder="Video Name"
                  className="input-ctn"
                  value={newVideo.name}
                  onChange={(e) => setNewVideo({ ...newVideo, name: e.target.value })}
                />

                <label className="label">Category</label>
                <Input
                  type="text"
                  placeholder="Category"
                  className="input-ctn"
                  value={newVideo.category}
                  onChange={(e) =>
                    setNewVideo({ ...newVideo, category: e.target.value })
                  }
                />

                <label className="label">Choose File</label>
                <Input
                  type="file"
                  className="input-ctn"
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={handleFileChange}
                />
                <div className="d-flex justify-content-center pt-5">
                  <Button onClick={addVideo} className="btn-5">
                    Add Video
                  </Button>
                </div>
              </div>
            </div>

            {videoFile && (
              <div className="preview">
                <h4>Video Preview:</h4>
                <video width="320" height="240" controls>
                  <source src={newVideo.VideoSrc} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Professional;





