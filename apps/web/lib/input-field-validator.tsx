export function isValidEmail(email: string) {
  const permitsDotAtomText =
    "[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*";
  const permitsQuotedString = `"(?:\\\\.|[^"\\\\])*"`;
  const composesLocalPart = `(?:${permitsDotAtomText}|${permitsQuotedString})`;

  const permitsDomainLabel = "[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?";
  const permitsTopLevelDomain = "[A-Za-z]{2,}";
  const composesDomainName = `(?:${permitsDomainLabel}(?:\\.${permitsDomainLabel})*\\.${permitsTopLevelDomain})`;

  const permitsDomainLiteral =
    "\\[(?:IPv6:[0-9a-fA-F:.]+|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)){3}))\\]";
  const composesDomain = `(?:${composesDomainName}|${permitsDomainLiteral})`;

  const emailPattern = `^${composesLocalPart}@${composesDomain}$`;
  const emailRegex = new RegExp(emailPattern, "i");

  const normalized = String(email).toLowerCase();
  const isEmailValid = emailRegex.test(normalized);

  return isEmailValid;
}
