let state = {
	dialogsPage: {
		dialogs: [
			{id: 1, name: "Nikolay"},
			{id: 2, name: "Ruslan" },
			{id: 3, name: "Dima"   },
			{id: 4, name: "Vovan"  },
			{id: 5, name: "Pavel"  },
		],
		messages: [
			{message: "Hi"}, {message: "How, are you?"}, {message: "Yes"}, {message: "Goodbay Vovan"}, {}
			]
	},
	profilePage: {
		posts: [
			{message: "Hi, do you do", count: 422},
			{message: "My name is Nikolay", count: 35},
			{message: "", count: 0},
			{message: "", count: 68},{message: "", count: 4},
		],
	},
	sidebar: {
		friends: 
			[
				{id: 1, name: "Nikolay"},
				{id: 2, name: "Ruslan" },
				{id: 3, name: "Dima"   },
				{id: 5, name: "Pavel"  },
			]
		
	}
	

}

export default state;