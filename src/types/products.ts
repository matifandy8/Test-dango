type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
};

type QuantityChangeHandler = (id: number, newQuantity: number) => void;

interface CardProductProps {
  price: number;
  title: string;
  description: string;
  quantity: number;
  fontSize?: number;
  onQuantityChange: QuantityChangeHandler;
  id: number;
}
