export const linkResolver = (doc) => '/' + doc.uid;
export const htmlSerializer = {
    heading1: ({ children }) => `<h1 class="h1">${children}</h1>`,
    heading2: (obj) => {
        return `<h2 class="text-xl font-bold">${obj.children}</h2>`;
    },
    heading3: ({ children }) => `<h3>${children}</h3>`,
    heading4: ({ children }) => `<h4>${children}</h4>`,
    heading5: ({ children }) => `<h5>${children}</h5>`,
    heading6: ({ children }) => `<h6>${children}</h6>`,
    paragraph: ({ children, node }) => `<p>${children}</p>`,
    preformatted: ({ node }) => {
        const list = node.text.split('\n,');
        console.log('list', list);
        return `
            <div class="mockup-code px-6">
                ${list.map((item, i) => {
                    return `<xmp class="" data-prefix="$">${item}</xmp>`;
                })}
            </div>
        `;
    },
    strong: ({ children }) => `<strong>${children}</strong>`,
    em: ({ children }) => `<em>${children}</em>`,
    listItem: ({ children }) => `<li>${children}</li>`,
    oListItem: ({ children }) => `<li>${children}</li>`,
    list: ({ children }) => `<ul>${children}</ul>`,
    oList: ({ children }) => `<ol>${children}</ol>`,
    image: ({ node }) => {
        const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null;
        const linkTarget =
            node.linkTo && node.linkTo.target ? `target="${node.linkTo.target}" rel="noopener"` : '';
        const wrapperClassList = [node.label || '', 'block-img'];
        const img = `<img src="${node.url}" alt="${node.alt ? node.alt : ''}" copyright="${
            node.copyright ? node.copyright : ''
        }" />`;

        return `
                <p class="${wrapperClassList.join(' ')}">
                      ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
                </p>
          `;
    },
    embed: ({ node }) => `
        <div id="youtubeEmbed" 
            class="w-full" 
            data-oembed="${node.oembed.embed_url}"
            data-oembed-type="${node.oembed.type}"
            data-oembed-provider="${node.oembed.provider_name}"
        >
            ${node.oembed.html}
        </div>
      `,
    hyperlink: ({ node, children }) => {
        const target = node.data.target ? `target="${node.data.target}" rel="noopener"` : '';
        const url = linkResolver(node.data);
        return `<a ${target} href="${url}">${children}</a>`;
    },
    label: ({ node, children }) => {
        return `<span class="${node.data.label}">${children}</span>`;
    },
    span: ({ text }) => (text ? text : '')
};