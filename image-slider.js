// image-slider-block/index.js
import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType('image-slider-block/image-slider', {
    title: 'Image Slider',
    icon: 'format-gallery',
    category: 'common',
    attributes: {
        images: {
            type: 'array',
            default: [],
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { images } = attributes;

        const onSelectImage = (newImages) => {
            setAttributes({ images: newImages });
        };

        return (
            <div>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={onSelectImage}
                        multiple
                        gallery
                        value={images.map((img) => img.id)}
                        render={({ open }) => (
                            <Button onClick={open}>Open Media Library</Button>
                        )}
                    />
                </MediaUploadCheck>
                <div>
                    {images.map((img, index) => (
                        <img key={index} src={img.url} alt={img.alt} />
                    ))}
                </div>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { images } = attributes;
        return (
            <div>
                {images.map((img, index) => (
                    <img key={index} src={img.url} alt={img.alt} />
                ))}
            </div>
        );
    },
});
