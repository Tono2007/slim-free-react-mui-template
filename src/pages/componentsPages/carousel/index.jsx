import useIntervalCounter from '@hooks/useIntervalCounter';
// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import PageHeader from '@/components/pageHeader';
import Slider from '@/components/slider';

import { data1 } from './data';

function CarouselComponentPage() {
	return (
		<>
			<PageHeader title="Carousel & Slider Component">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Components</Typography>
					<Typography color="text.tertiary">Carousel</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Stack spacing={2}>
				<Typography>Simple color slider</Typography>
				<SimpleAutoSlider />
				<Typography>Slider with MUI Mobile Stepper</Typography>
				<ButtonsAutoSlider />
				<LargeAutoSlider />
				<Typography>Carousel WIP</Typography>
			</Stack>
		</>
	);
}

function SimpleAutoSlider() {
	const data = ['red', 'blue', 'green', 'black', 'yellow', 'purple'];
	const { count } = useIntervalCounter({ max: data.length, time: 2000 });

	return (
		<Slider activeSlideIndex={count} dataLength={data.length}>
			{data.map((data, i) => (
				<Slider.Slide index={i} key={i}>
					<Box p={4} bgcolor={data}>
						{data}
					</Box>
				</Slider.Slide>
			))}
		</Slider>
	);
}

function ButtonsAutoSlider() {
	const data = data1;
	const { count, setCounter } = useIntervalCounter({ max: data.length, time: 6000 });

	return (
		<>
			<Card type="none">
				<Slider activeSlideIndex={count} dataLength={data.length}>
					{data.map((data, i) => (
						<Slider.Slide index={i} key={i}>
							<Box maxHeight={400}>
								<Typography variant="subtitle1" p={2}>
									{data.label}
								</Typography>
								<Box
									component="img"
									sx={{
										height: '100%',
										width: '100%',
										objectFit: 'cover',
									}}
									src={data.imgPath}
									alt={data.label}
								/>
							</Box>
						</Slider.Slide>
					))}
				</Slider>
				<MobileStepper
					steps={data.length}
					position="static"
					activeStep={count}
					nextButton={
						<Button size="small" onClick={() => setCounter(count + 1)} disabled={count === data.length - 1}>
							Next
							<KeyboardArrowRight />
						</Button>
					}
					backButton={
						<Button size="small" onClick={() => setCounter(count - 1)} disabled={count === 0}>
							<KeyboardArrowLeft />
							Back
						</Button>
					}
				/>
			</Card>
			<Typography>Slider with MUI Mobile Stepper text Variant</Typography>

			<Card type="none">
				<Slider activeSlideIndex={count} dataLength={data.length}>
					{data.map((data, i) => (
						<Slider.Slide index={i} key={i}>
							<Box maxHeight={400}>
								<Typography variant="subtitle1" p={2}>
									{data.label}
								</Typography>
								<Box
									component="img"
									sx={{
										height: '100%',
										width: '100%',
										objectFit: 'cover',
									}}
									src={data.imgPath}
									alt={data.label}
								/>
							</Box>
						</Slider.Slide>
					))}
				</Slider>
				<MobileStepper
					variant="text"
					steps={data.length}
					position="static"
					activeStep={count}
					nextButton={
						<Button size="small" onClick={() => setCounter(count + 1)} disabled={count === data.length - 1}>
							Next
							<KeyboardArrowRight />
						</Button>
					}
					backButton={
						<Button size="small" onClick={() => setCounter(count - 1)} disabled={count === 0}>
							<KeyboardArrowLeft />
							Back
						</Button>
					}
				/>
			</Card>
		</>
	);
}

function LargeAutoSlider() {
	const data = data1;
	const { count: activeSlideIndex, setCounter } = useIntervalCounter({ max: data.length, time: 6000 });

	return (
		<Card type="none">
			<Slider activeSlideIndex={activeSlideIndex} dataLength={data.length}>
				{data.map((data, i) => (
					<Slider.Slide index={i} key={i}>
						<Box position="relative" maxHeight={500}>
							<Box
								component="img"
								sx={{
									height: '100%',
									width: '100%',
									objectFit: 'cover',
								}}
								src={data.imgPath}
								alt={data.label}
							/>
							<Typography
								variant="subtitle1"
								position="absolute"
								bottom={0}
								left={0}
								right={0}
								bgcolor="primary.main"
								color="primary.contrastText"
								p={2}
								sx={{
									transition: 'opacity 0.4s 0.4s',
									opacity: activeSlideIndex === i ? 1 : 0,
								}}
							>
								{data.label}
							</Typography>
							<Typography
								variant="subtitle1"
								position="absolute"
								left={0}
								bgcolor="tertiary.main"
								color="tertiary.contrastText"
								p={2}
								sx={{
									transition: 'all 0.5s 0.4s',
									opacity: activeSlideIndex === i ? 1 : 0,
									top: activeSlideIndex === i ? 0 : '100%',
								}}
							>
								{data.label}
							</Typography>
							<Typography
								variant="subtitle1"
								position="absolute"
								left={0}
								width="30%"
								bgcolor="#0009"
								color="#fff"
								p={2}
								sx={{
									transition: 'all 0.5s 0.9s',
									opacity: activeSlideIndex === i ? 1 : 0,
									bottom: activeSlideIndex === i ? 55 : 0,
								}}
							>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa quae assumenda
								quod et saepe perspiciatis accusantium at quo tempora!
								{data.label}
							</Typography>
						</Box>
					</Slider.Slide>
				))}
			</Slider>
			<MobileStepper
				steps={data.length}
				position="static"
				activeStep={activeSlideIndex}
				nextButton={
					<Button
						size="small"
						onClick={() => setCounter(activeSlideIndex + 1)}
						disabled={activeSlideIndex === data.length - 1}
					>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button
						size="small"
						onClick={() => setCounter(activeSlideIndex - 1)}
						disabled={activeSlideIndex === 0}
					>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
		</Card>
	);
}

export default CarouselComponentPage;
