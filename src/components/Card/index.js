import { Description, Info } from "./styled";
export default function Card({ telefone, endereco }) {
  return (
    <Info>
      <div>
        <Description>
          <span>Telefone: {telefone}</span>
          <span>Endereco: {endereco}</span>
        </Description>
      </div>
    </Info>
  );
}
