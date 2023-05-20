import product1 from '@/assets/images/products/product_1.jpg';
import product2 from '@/assets/images/products/product_2.jpg';
import product3 from '@/assets/images/products/product_3.jpg';
import product4 from '@/assets/images/products/product_4.jpg';
import product5 from '@/assets/images/products/product_5.jpg';

function createData(id, productImg, name) {
	return {
		id,
		productImg,
		name,
	};
}

export default [
	createData(1, product1, 'The Dothraki Shoes'),
	createData(2, product2, 'Selonian Hand Bag'),
	createData(3, product3, 'Kubaz Sunglass'),
	createData(4, product4, 'Kel Dor Sunglass'),
	createData(5, product5, 'Westeros Sneaker'),
];
