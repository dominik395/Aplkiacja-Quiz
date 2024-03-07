const initialState = {
    users: {
        userLogin: {},
        usersList: []
    },
    game: {
        categoryList: [
            {categoryName: 'Vehicles', categoryId: 28},
            {categoryName: 'Geography', categoryId: 22},
            {categoryName: 'History', categoryId: 23},
            {categoryName: 'Sports', categoryId: 21},
            {categoryName: 'Films', categoryId: 11},
            {categoryName: 'Video Games', categoryId: 15}
        ],
        selectedGame: {}
    }
}

export default initialState