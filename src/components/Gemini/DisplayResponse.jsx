import React from "react";

function DisplayResponse({ response }) {
  // Split the response into sections based on potential headings
  const sections = response
    .split(/(?=\*\*[\d]+\.\s[A-Za-z\s&():'-]+\*\*:?\s*$)/m)
    .filter(Boolean);

  return (
    <div className="gemini-response flex flex-col justify-start items-start gap-6 h-full w-full">
      {sections.map((section, index) => {
        const headingMatch = section.match(
          /\*\*([\d]+\.\s[A-Za-z\s&():'-]+)\*\*:?\s*$/m
        );
        const heading = headingMatch ? headingMatch[1] : null;
        const content = heading
          ? section.substring(headingMatch[0].length).trim()
          : section.trim();
        const points = content
          .split(/\*\s+(.+)/)
          .filter(Boolean)
          .map((point) => point.trim());

        if (heading) {
          return (
            <div key={index} className="response-section">
              <h3 className="font-semibold text-xl">{heading}</h3>
              {points.length > 0 ? (
                <ul>
                  {points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      dangerouslySetInnerHTML={{ __html: point }}
                    />
                  ))}
                </ul>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </div>
          );
        } else if (points.length > 0) {
          return (
            <ul key={index}>
              {points.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </ul>
          );
        } else {
          return (
            <p key={index} dangerouslySetInnerHTML={{ __html: content }} />
          );
        }
      })}
    </div>
  );
}

export default DisplayResponse;
