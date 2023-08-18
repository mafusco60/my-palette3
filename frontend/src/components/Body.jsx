import React from 'react';

const Body = () => {
	try {
		console.log('Body');
	} catch (error) {
		console.log('error Body');
	}
	return (
		<>
			{/* Set the reddish beige background for the body */}
			<style>
				{`
          body {
            background: linear-gradient(
							to bottom,
							var(--mainBackgroundTop),
							var(--mainBackgroundMiddle),
							var(--mainBackgroundMiddle),
              var(--mainBackgroundBottom),
							var(--mainBackgroundBottom),
							var(--mainBackgroundTop)
            );
            margin: 0;  
            padding: 0; 
          }
               `}
			</style>
		</>
	);
};
export default Body;
