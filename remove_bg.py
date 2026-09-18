from PIL import Image

def make_transparent():
    img = Image.open('public/ai_expert_illustration.png')
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # If the pixel is close to white, make it transparent
    for item in datas:
        # Check if R, G, B are all > 240 (very light gray / white)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save('public/ai_expert_illustration_transparent.png', "PNG")

if __name__ == "__main__":
    make_transparent()
