import { PropTypes } from "prop-types";

export const SlideshowPropTypes = PropTypes.shape({
    id: PropTypes.number,
    published: PropTypes.boolean,
    name: PropTypes.string,
    creator: PropTypes.string,
    artworks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      published: PropTypes.boolean,
      media: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        alternativeText: PropTypes.string,
        caption: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        formats: PropTypes.object,
        hash: PropTypes.string.isRequired,
        ext: PropTypes.string,
        mime: PropTypes.string.isRequired,
        size: PropTypes.number,
        url: PropTypes.string.isRequired,
        previewUrl: PropTypes.string,
        provider: PropTypes.string,
        provider_metadata: PropTypes.object
      }))
    }))
});

export default SlideshowPropTypes;
