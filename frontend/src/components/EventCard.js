import React from 'react'

function EventCard() {
    return (
        <div>
            <div className="row">
				<div className="col-md-8 offset-md-2">
					<div className="blog-card bg-white mb-4 overflow-hidden d-lg-flex rounded-lg position-relative">
						<div className="blog-image overflow-hidden d-flex align-items-center">
							<img src="/images/laugh.jpg" alt="" className="blog-thumbnail"/>
						</div>
						<div className="p-4 blog-container">
							<a href="#!" className="blog-category text-uppercase py-1 px-2 rounded-lg">
								<small className="font-weight-bold">Standup</small>
							</a>
							<h4 className="mt-2 font-weight-bold">
								<a href="#!" className="text-dark" title="Agriculture is good for both humans and animals">Agriculture is good for both humans and animals</a>
							</h4>
							<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ullam, reprehenderit? Praesentium doloribus soluta, quia.</p>
							<div className="blog-footer d-flex justify-content-between align-items-center border-top">
								<div>
									<a href="#!"><img src="/images/user.jpg" alt="" className="blog-author shadow"/></a>
									<a href="#!" className="text-dark">Shadow White</a>
								</div>
								<small className="text-muted">Jan 12, 2019</small>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default EventCard
