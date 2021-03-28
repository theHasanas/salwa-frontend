// Styling
import { Title, Description, ShopImage } from "../styles";

//image
import shop from "../images/shop.jpg";
function Home() {
  return (
    <>
      <Title>Cookies and Beyond</Title>
      <Description>Delightful Piece Of heaven</Description>
      <ShopImage src={shop} alt="Shop Image" />
    </>
  );
}

export default Home;
