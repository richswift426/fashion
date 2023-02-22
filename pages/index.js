import { useState, useEffect } from "react";
import Head from "next/head";
import { GithubIcon } from "components/icons/GithubIcon";
import ImageUploading from "react-images-uploading";
import { generateZip } from "utils/zip";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [products, setProducts] = useState([]);
  const [userImages, setUserImages] = useState([]);
  const maxNumber = 69;

  const onProductsChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setProducts(imageList);
  };

  const onUsersChange = (users, addUpdateIndex) => {
    console.log(users, addUpdateIndex);
    setUserImages(users);
  };

  useEffect(() => {
    console.log(products);
  }, [products]);

  const uploadProducts = async () => {
    await generateZip(products);
  };

  return (
    <>
      <Head>
        <title>Fashion app</title>
        <meta name="description" content="Fashion app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <a
          href="https://github.com/vana-com/vana-mit-hackathon"
          target="_blank"
        >
          <GithubIcon />
        </a>
      </header>
      <main className="main">
        <h1>Fashion App</h1>
        <div className="content container">
          <div className="space-y-4">
            <div className="products-slot">
              <div className="products-slot-title">Upload products</div>
              <ImageUploading
                multiple
                value={products}
                onChange={onProductsChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg", "jpeg", "png"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <>
                    <button
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    {products.length !== 0 && (
                      <button onClick={() => uploadProducts(products)}>
                        Upload products
                      </button>
                    )}

                    <div className="uploaded-products">
                      {products.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image.data_url} alt="Product image" />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </ImageUploading>
            </div>
            <div className="users-slot">
              <div className="users-slot-title">Upload user images</div>
              <ImageUploading
                multiple
                value={userImages}
                onChange={onUsersChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg", "jpeg", "png"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <>
                    <button
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    {userImages.length !== 0 && (
                      <button onClick={() => generateZip(userImages)}>
                        Upload user images
                      </button>
                    )}
                    <div className="uploaded-products">
                      {userImages.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image.data_url} alt="Product image" />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </ImageUploading>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
