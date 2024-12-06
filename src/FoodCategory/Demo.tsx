import React, { useState, useRef } from "react";

const VideoUploader = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [newVideo, setNewVideo] = useState<{ VideoSrc: string }>({ VideoSrc: "" });

  // Ref to access the input element
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

      // Create a URL for the selected file
      setNewVideo({ ...newVideo, VideoSrc: URL.createObjectURL(file) });
    }
  };

  const handleAddButtonClick = () => {
    if (!videoFile) {
      alert("No video file selected!");
      return;
    }

    // Perform the add operation (e.g., upload or save)
    console.log("Adding video:", videoFile.name);

    // Reset the file input and state
    setVideoFile(null);
    setNewVideo({ VideoSrc: "" });

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input field
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        ref={fileInputRef} // Attach ref to the input
      />
      {newVideo.VideoSrc && <video src={newVideo.VideoSrc} controls width="300" />}
      <button onClick={handleAddButtonClick}>Add Video</button>
    </div>
  );
};

export default VideoUploader;
