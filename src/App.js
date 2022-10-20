import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { init, closeGuideline, nextTip } from 'guideline-tip-id/dist/react'

function App() {

    const dataProps = {
        closeButton: false,
        dataGuideline: [
            {
                dataID: "article",
                positionTip: "bottom",
                content: (
                    <div>
                        <p>This is the article content 1</p>
                        <button onClick={() => closeGuideline()}>Skip</button>
                        <button onClick={() => nextTip("article-bottom-2")}>
                            Next
                        </button>
                    </div>
                ),
            },
            {
                dataID: "article-bottom-2",
                positionTip: "right",
                content: (
                    <div>
                        <p>This is the article content 2</p>
                        <button onClick={() => closeGuideline()}>Skip</button>
                        <button onClick={() => nextTip("cat")}>Next</button>
                    </div>
                ),
            },
            {
                dataID: "cat",
                positionTip: "left",
                content: (
                    <div>
                        <p>This is the article content</p>
                        <button onClick={() => closeGuideline()}>Close</button>
                    </div>
                ),
            },
        ],
    };

    React.useEffect(() => {
        init(dataProps);
    }, []);

    return (
        <div className="App">
            <div className="wrap">
                <div className="article">
                    <div id="article">This is the article content</div>
                    <div id="article-middle">This is the article content</div>
                    <div id="article-bottom">This is the article content</div>
                    <div id="article-bottom-1">This is the article content</div>
                    <div id="article-bottom-2">
                        This is the article content
                        <div id="test-content" style={{ width: "150px" }}>
                            Test 123
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="category-article" id="cat">
                        This is category article
                    </div>
                    <div className="new-article" id="new">
                        <p>This is new article</p>
                    </div>
                    <div className="new-article" id="tag">
                        This is tag
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
