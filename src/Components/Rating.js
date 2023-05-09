import React from 'react'

function Rating({ data }) {
    return (
        <div>
            {data.map(item => (
                <>

                    <h4>
                        {item.name}
                    </h4>
                    <div>
                        <p> {item.date}</p>
                        <p> {item.comments}</p>
                    </div>

                </>

            ))}

        </div>
    )
}

export default Rating