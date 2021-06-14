import React from 'react';
import Modal from './Modal.js';
import './style.css';
import { useState } from 'react';

export default function Table({
  posts,
  deletePosts,
  selectPosts,
  getComments,
  isClick,
  comments,
  toggle
}) {
  const [selectedComment, setselectedComment] = useState();

  return (
    <div className="container">
      <table class="table ">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">POST ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">BODY</th>
            <th /> <th /> <th />
          </tr>
        </thead>
        <tbody>
          {posts.map(post => {
            return (
              <>
                <tr>
                  <th scope="row">{post.id}</th>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>

                  {/* DELETE BUTTON : */}
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        deletePosts(post.id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                  {/* UPDATE BUTTON : */}
                  <td>
                    <button
                      type="button"
                      class="btn btn-warning"
                      onClick={() => {
                        selectPosts(post);
                      }}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() => {
                        getComments(post.id);
                        setselectedComment(post.id);
                      }}
                    >
                      COMMENTS
                    </button>
                  </td>
                </tr>
                <br />
                <tr>
                  {isClick && selectedComment === post.id ? (
                    <Modal data={comments} toggle={toggle} />
                  ) : (
                    <div />
                  )}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
