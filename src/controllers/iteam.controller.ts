import type { NextFunction, Request, Response } from "express";
import { items } from "../models/iteam.models.js";

// getItems
export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      message: "All Products Here",
      success: true,
      data: items,
    });
  } catch (err) {
    next(err);
  }
};

// createItems
export const createItems = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { itemName, description, price, inStock } = req.body;
    const newItems = {
      id: Date.now(),
      itemName,
      description,
      price,
      inStock,
    };
    items.push(newItems);
    // console.log("New Iteams Added: ",newItems);
    res.status(201).json({
      message: "Product Added in your Cart",
      success: true,
      data: newItems,
    });
  } catch (error) {
    next(error);
  }
};

// get items using ID
export const getItemsUsingID = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    if (!id || Array.isArray(id)) {
      return res.status(404).send({
        message: "Invallid ID",
        success: false,
      });
    }
    const itemID = parseInt(id, 10);
    const item = items.find((item) => item.id === itemID);
    if (!item) {
      return res.status(404).json({
        message: "No Item Found",
        success: false,
      });
    }

    res.status(200).json({
      message: `Product ${item.itemName} Successfully`,
      success: true,
      data: item,
    });
  } catch (err) {
    next(items);
  }
};

// put items using ID
export const updateProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { itemName, price, inStock } = req.body;
    const id = req.params.id;
    if (!id || Array.isArray(id)) {
      return res.status(404).json({
        message: "Invallid Id",
        success: false,
      });
    }
    const itemsId = parseInt(id, 10);

    const itemIndex = items.findIndex((item) => item.id === itemsId);
    if (itemIndex == -1) {
      return res.status(404).json({
        message: "Product Not Found",
        success: false,
      });
    }

    const updatedItems = items[itemIndex];

    if (!updatedItems) {
      return res.status(404).json({
        message: "Product Not Found",
        success: false,
      });
    }

    updatedItems.itemName = itemName;
    updatedItems.price = price;
    updatedItems.inStock = inStock;

    res.status(200).json({
      message: "Product Updated Successfully",
      success: true,
      data: updatedItems,
    });
  } catch (err) {
    next(err);
  }
};
