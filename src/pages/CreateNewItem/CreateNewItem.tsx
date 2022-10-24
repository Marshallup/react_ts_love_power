import React from "react";
import Button from "../../components/Button/Button";
import FormItem from "../../components/formControlls/FormItem/FormItem";
import Input from "../../components/formControlls/Input/Input";
import Select from "../../components/formControlls/Select/Select";
import TextArea from "../../components/formControlls/TextArea/TextArea";
import Uploader from "../../components/formControlls/Uploader/Uploader";

const CreateNewItem = () => {
  return (
    <div className="container">
      <h1 className="main__title">Create New Item</h1>

      <div className="form__add">
        <form>
          <FormItem label='Image, Video, Audio, or 3D Model' required subText="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB">
            <Uploader />
          </FormItem>

          <FormItem label='Name' required>
            <Input type='text' placeholder="Item name" required name="name" />
          </FormItem>
          <FormItem label='URL'>
            <Input type='text' placeholder="http://yoursite.io/item/123" name="url" />
          </FormItem>
          <FormItem label='Description' subText="0 of 1000 characters used." required>
            <TextArea required name="description" placeholder="Description..." />
          </FormItem>
          <FormItem label="Collection" subText="This is the collection where your item will appear." tooltipText={{ text: 'Lorem ipsum dolor sit amet.' }}>
            <Select />
          </FormItem>
          <FormItem label="Supply" subText="The number of items that can be minted. No gas cost to you!" tooltipText={{ text: 'Lorem ipsum dolor sit amet.' }}>
            <Input defaultValue={1} />
          </FormItem>
          <FormItem label="Freeze metadata" subText="Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage." tooltipHeader={{ text: 'Lorem ipsum dolor sit amet.' }}>
            <Input placeholder="To freeze your metadata, you must create your item first " />
          </FormItem>

          <FormItem submit>
            <Button className="btn__send">
              Create
            </Button>
          </FormItem>
        </form>
      </div>
    </div >
  )
}

export default CreateNewItem