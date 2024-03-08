const getQuestions = async (categoryId) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=boolean`)
    const data = await response.json()

    return data.results
}

export { getQuestions }