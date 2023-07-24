import { useState, useEffect } from "react";

function ChooseImage() {
  const [image, setImage] = useState();
  const handlePreviewAvatar = (e) => {
    // tạo object và lưu vào thành link giả local host để
    //load lên img
    const image = e.target.files[0];
    image.preview = URL.createObjectURL(image);

    setImage(image);
  };
  useEffect(() => {
    return () => {
      // xóa object trong bộ nhớ
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {image && <img src={image.preview} alt="ảnh" width="80%" />}
    </div>
  );
}
export default ChooseImage;
