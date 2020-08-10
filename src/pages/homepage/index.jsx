import React, { Component } from 'react';
import Header from '../../components/header/index';
import DatePicker from '../../components/datePicker/index';
import DayNightMenu from '../../components/dayNightMenu/index';
import ChoosenDate from '../../components/choosenDate/index';
import MediaCard from '../../components/cardMenu/index';
import CardSnakeBar from '../../components/cartSnakeBar/index';

class HomePage extends Component {
	constructor(props) {
    super(props);
    this.state = {
			listDate: [],
			listDay: ['Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
			scroll:0,
			day: true,
			choosenDate: {},
			item: [],
			open: true
		};
	}

	getListDate = () => {
		let listDate = []
		for (let index = 0; index < 14; index++) {
			let date = new Date()
			let pastDate = date.getDate() + (index-7) 
			date.setDate(pastDate)
			let data = {
				day: this.state.listDay[date.getDay()],
				date: date.getDate(),
				month: date.getMonth(),
				year: date.getFullYear()
			}
			listDate.push(data)
			if (index===7) {
				this.setState({
					choosenDate: data
				})
			}
		}
		this.setState({
			listDate: listDate
		})
	}
	handleChoosenDate = async (e) => {
		this.setState({
			choosenDate: await e
		})
	}
	handleDayNight = (e) => {
		this.setState({
			day: e
		})
	}
	handleCart = (e) => {
		let data = this.state.item
		data.push(e)
		this.setState({
			item: data
		})
	}
	handleScroll = (e) => {
		let positionY = window.pageYOffset
		if (positionY!==0) {
			this.setState({
				open: false
			})
		} else {
			this.setState({
				open: true
			})
		}
	}
	componentDidMount() {
		this.getListDate()
		window.addEventListener('scroll', this.handleScroll)
	}
	render() {
		return (
			<div>
				<Header/>
				<DatePicker listDate={this.state.listDate} handleChoosenDate={(e)=>this.handleChoosenDate(e)}/>
				<DayNightMenu open={this.state.open} day={this.state.day} handleDayNight={(e)=>this.handleDayNight(e)}/>
				<CardSnakeBar item={this.state.item} />
				<ChoosenDate choosenDate={this.state.choosenDate}/>
				<MediaCard handleCart={(e)=>this.handleCart(e)}/>
			</div>
		);
	}
}

export default HomePage;