import { useState } from "react";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/dist/style.css";

const MultiEmailHandlerInput = ({
  listOfEmails,
  setListOfEmails,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="custom-shadow m-0 ">
      <form>
        <div className="d-flex justify-content-between">
          <h5 className="text-green">Enter Multiple Emails</h5>
        </div>
        <ReactMultiEmail
          placeholder="Enter emails in bulk"
          emails={listOfEmails}
          onChange={(_emails) => {
            setListOfEmails(_emails);
          }}
          autoFocus={true}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          getLabel={(email, index, removeEmail) => {
            return (
              <div data-tag key={index}>
                <div data-tag-item className="py-1">{email}</div>
                <span data-tag-handle onClick={() => removeEmail(index)}>
                  ×
                </span>
              </div>
            );
          }}
        />

        <div className="text-green">
          <span className="font-12 lineHeight">
            ( You can either type in email addresses and press enter when you're
            complete to move to the next email, or you can copy and paste a list
            from Excel or somewhere else. )
          </span>
        </div>
      </form>
    </div>
  );
};

export default MultiEmailHandlerInput;
