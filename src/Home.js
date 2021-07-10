import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="container">
        <h1>THIS SITE IS MADE WITH</h1>
        <div className="row">
          <div className="col-lg-6">
            {/* HTML */}
            <div>
              <div class="card">
                <div class="card-body">
                  <img src="https://img.icons8.com/color/144/4a90e2/html-5--v1.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* CSS */}

            <div>
              <div class="card">
                <div class="card-body">
                  <img src="https://img.icons8.com/color/144/4a90e2/css3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* JAVASCRIPT */}

            <div>
              <div class="card">
                <div class="card-body">
                  <img src="https://img.icons8.com/color/144/4a90e2/javascript--v2.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* BOOTSTRAP */}
            <div>
              <div class="card">
                <div class="card-body">
                  <img src="https://img.icons8.com/color/144/4a90e2/bootstrap.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* REACT */}

            <div>
              <div class="card">
                <div class="card-body">
                  <img src="https://img.icons8.com/dotty/160/4a90e2/react.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" />
      </div>
    </div>
  );
}
