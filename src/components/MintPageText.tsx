export const MintPageText = () => (
  <>
    <p className="blocktext">
      <br />
      The smplverse is an nft collection of synthetic facial training data from
      the computational infrastructure of the metaverse.
      <br />
      <br />
      These pfps were procedurally-generated using smpl—a body mesh used to
      animate avatars in mixed reality from sparse inputs—as the basis for new
      algorithms that will improve face and gesture tracking in virtual
      environments.
      <br />
      <br />
      As a minter, you submit a face image with your webcam or via upload,
      which a face recognition model uses to find the closest matching image in
      the smplverse collection.
      <br />
      <br />
      After approving the mint transaction, both images are hashed and written
      to the [token ?].
      <br />
      <br />
      When the image is submitted, it receives one attribute from the model:
      confidence.
      <br />
      <br />
      Confidence is a declining measure: as more images are minted, your
      likelihood of receiving a high confidence match decreases.
      <br />
      <br />
      Conversely, your likelihood of receiving an image with rarer visual
      attributes increases.
    </p>
    <p className="blocktext">
      Note on data collection:
      <br />
      <br />
      We calculate a 128-dimensional vector from your image and use this
      encoding to compare against the smplverse. no personal data is stored on
      our server.
    </p>
  </>
)
