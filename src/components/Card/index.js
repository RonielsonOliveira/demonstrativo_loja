import { Description, Endereco, Info } from "./styled";
import { SiAlltrails } from "react-icons/si";
import { TbBeach } from "react-icons/tb";
export default function Card({ cidade, endereco }) {
  <div>{cidade}</div>;
  switch (cidade) {
    case "Uruburetama - Ceará":
      return (
        <Info>
          <div>
            <SiAlltrails size={40} />
            <Description>
              <Endereco>
                <span>{cidade}</span>
                <span>{endereco}</span>
              </Endereco>
            </Description>
          </div>
        </Info>
      );

    case "Paracuru - Ceará":
      return (
        <Info>
          <div>
            <TbBeach size={40} />
            <Description>
              <Endereco>
                <span>{cidade}</span>
                <span>{endereco}</span>
              </Endereco>
            </Description>
          </div>
        </Info>
      );
    default:
      return (
        <Info>
          <div>
            <TbBeach size={40} />
            <Description>
              <span>{cidade}</span>
              <span>{endereco}</span>
            </Description>
          </div>
        </Info>
      );
  }
}
