import React from "react";
import Input from "../../common/Input/Input";
import "./index.css";

const Inputs = () => {
  return (
    <div className="inputs">
      <div className="inputs__conteiner">
        <div className="inputs__title">Inputs</div>
        <div className="inputs-components-container">
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">&lt;Input&gt;</div>
              <Input />
            </div>
            <div className="input-space">
              <div className="input-space__title">
                &lt;Input placeholder="Hello world"&gt;
              </div>
              <Input placeholder="Hello world" />
            </div>
            <div className="input-space">
              <div className="input-space__title">
                &lt;Input placeholder="Hello world" type="email" label="Hello
                world"&gt;
              </div>
              <Input
                placeholder="Hello world"
                type="email"
                label="Hello world"
              />
            </div>
          </div>
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">&lt;Input disabled&gt;</div>
              <Input disabled />
            </div>
          </div>
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">
                &lt;Input helperText="Some interesting text"&gt;
              </div>
              <Input helperText="Some interesting text" />
            </div>
            <div className="input-space">
              <div className="input-space__title">
                &lt;Input helperText="Some interesting text" type="email"&gt;
              </div>
              <Input helperText="Some interesting text" type="email" />
            </div>
          </div>
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">
                &lt;Input startIcon="phone"&gt;
              </div>
              <Input startIcon="phone" />
            </div>
            <div className="input-space">
              <div className="input-space__title">
                &lt;Input endIcon="padlock"&gt;
              </div>
              <Input endIcon="padlock" />
            </div>
          </div>
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">
                &lt;Input defaultValue="Text"&gt;
              </div>
              <Input defaultValue="Text" />
            </div>
          </div>
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">&lt;Input size="sm"&gt;</div>
              <Input size="sm" />
            </div>
            <div className="input-space">
              <div className="input-space__title">&lt;Input&gt;</div>
              <Input />
            </div>
          </div>
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">&lt;Input fullWidth&gt;</div>
              <Input fullWidth />
            </div>
          </div>
          <div className="input-column">
            <div className="input-space">
              <div className="input-space__title">&lt;Input multiline&gt;</div>
              <Input multiline />
            </div>
          </div>
        </div>
        <footer>Created by Cesar Luis Rijo - devChallenges.io</footer>
      </div>
    </div>
  );
};

export default Inputs;
