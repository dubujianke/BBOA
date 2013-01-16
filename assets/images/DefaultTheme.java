package cn.blackberry.theme.defaultTheme;

import net.rim.device.api.system.Bitmap;
import net.rim.device.api.system.EncodedImage;
import net.rim.device.api.ui.Color;
import net.rim.device.api.ui.image.Image;
import net.rim.device.api.ui.image.ImageFactory;
import cn.blackberry.log.Logger;
import cn.blackberry.theme.Theme;

public class DefaultTheme implements Theme {

	private String packageName = "cn/blackberry/theme/defaultTheme/";

	private String[] labels = { "办公自动化", "车险", "客户管理", "商业智能", "三维模型", "订单管理",
			"故障报告", "门店巡视", "产品展示", "选项" };
	private int homScreenIconNumber = 10;

	public Color getFontColor() {
		// TODO Auto-generated method stub
		return null;
	}

	public Color getBackgroundColor() {
		// TODO Auto-generated method stub
		return null;
	}

	public Bitmap getHomeScreenBG() {
		// TODO Auto-generated method stub

		Bitmap result = Bitmap
				.getBitmapResource(packageName + "background.png");

		return result;
	}

	public Bitmap getHomeScreenIcon(int iconID) {
		// TODO Auto-generated method stub
		Bitmap result = null;
		try {
			result = Bitmap.getBitmapResource(packageName + "icon_" + iconID
					+ ".png");
		} catch (Exception e) {
			Logger.log("Can't open homscreen icon:" + iconID);

		}
		return result;
	}

	public Bitmap getHomeScreenIconFocused(int iconID) {
		// TODO Auto-generated method stub

		Bitmap result = null;
		try {
			result = Bitmap.getBitmapResource(packageName + "iconFocused_"
					+ iconID + ".png");
		} catch (Exception e) {
			Logger.log("Can't open homscreen focused icon:" + iconID);

		}
		return result;
	}

	public Bitmap getHomeScreenBottomBG() {
		Bitmap result = Bitmap.getBitmapResource(packageName + "bottom.png");

		return result;
	}

	public Bitmap getHomeScreenTopBG() {
		Bitmap result = Bitmap.getBitmapResource(packageName + "top.png");

		return result;
	}

	public String getHomeScreenIconLabel(int iconID) {
		// TODO Auto-generated method stub

		String result = "";
		try {
			result = labels[iconID - 1];
		} catch (Exception e) {
			Logger.log("Unable to get label " + iconID);
		}
		return result;

	}

	public int getHomeScreenIconNumber() {
		// TODO Auto-generated method stub
		return this.homScreenIconNumber;
	}

	public Bitmap getFocusedBG() {
		Bitmap result = Bitmap.getBitmapResource(packageName + "selected.png");

		return result;
	}

	public Bitmap getBitmapByName(String fileName) {
		Bitmap result = Bitmap.getBitmapResource(packageName + fileName);

		return result;
	}

	
	public Image getToolBarImg(int id) {
		// TODO Auto-generated method stub
		
		
		Bitmap result=null;
		Image resultImg=null;
		
		try{
		 result = Bitmap.getBitmapResource(packageName + "toolbarimg"+id+".png");
		
		 resultImg=ImageFactory.createImage(result);
		}catch (Exception e)
		{
			 result = Bitmap.getBitmapResource(packageName + "toolbarimg1.png");
				
			 resultImg=ImageFactory.createImage(result);
		}
		
		return resultImg;
	}

	public EncodedImage getIndicator() {
		// TODO Auto-generated method stub
		
		EncodedImage result=EncodedImage.getEncodedImageResource(packageName+"indicatorread.png");
		return result;
	}

	public Bitmap getAppIconRead() {
		Bitmap result = Bitmap.getBitmapResource(packageName + "appiconread.png");

		return result;
		
	}

	public Bitmap getAppIconUnRead() {
		Bitmap result = Bitmap.getBitmapResource(packageName + "appiconunread.png");

		return result;
		
	}

	public Bitmap getSmallIcon(int iconID) {
		Bitmap result=null;
		
		
		try{
		 result = Bitmap.getBitmapResource(packageName + "toolbarimg"+iconID+".png");
		
		 
		}catch (Exception e)
		{
			 result = Bitmap.getBitmapResource(packageName + "toolbarimg1.png");
				
			 
		}
		if (result==null)
		{ result = Bitmap.getBitmapResource(packageName + "toolbarimg1.png");
		}
		return result;
		
	}

	public Bitmap getUnFocusedBG() {
		Bitmap result = Bitmap.getBitmapResource(packageName + "unselected.png");

		return result;
		
		
	}
}
