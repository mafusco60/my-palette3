import React from 'react';

const Body = () => {
	try {
		console.log('Body');
	} catch (error) {
		console.log('error Body');
	}
	return (
		<>
			{/* Set the gold background for the body */}
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
            margin: 0; /* : Remove default body margin */
            padding: 0; /* : Remove default body padding */
          }
               `}
			</style>
		</>
	);
};
export default Body;
