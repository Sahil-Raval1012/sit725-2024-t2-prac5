
module.exports = {
    get: (req, res) =>{
        res.send(`
            <div style="background-color: green; height: 100vh; display: flex; justify-content: center;">
            <div style="display: flex; justify-content: space-around; align-items: center; height: 100vh;">
                <div style="background-color: lightgray; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); border-radius: 10px; text-align: center; width: 200px;">
                    <h2 style="color: blue;">Unit </h2>
                    <p>Applied Software Engineering</p>
                </div>
                <div style="background-color: lightgray; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); border-radius: 10px; text-align: center; width: 200px;">
                    <h2 style="color: blue;">Task</h2>
                    <p>Task 5.2C</p>
                </div>
                <div style="background-color: lightgray;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 10px; text-align: center; width: 200px;">
                    <h2 style="color: blue;">Topic</h2>
                    <p>MVC Model</p>
                </div>
            </div>
            </div>
            `)
    }
}
