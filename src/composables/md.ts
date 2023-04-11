import { marked } from "marked"
import sanitize from "sanitize-html"
import { z } from "zod"
export const sampleMd = `
# Introduction
Today, we will be talking about the general anatomy, histology, function, neurovasculature, even some embryology of the stomach.

# General Anatomy
![stomach highlighted in red](https://upload.wikimedia.org/wikipedia/commons/f/f7/Tractus_intestinalis_ventriculus.svg)

The stomach is a J-shaped hollow organ that is responsible for storing and mixing food. Its location varies in different people based on the tonicity of the stomach, but typically it is found in the hypogastric and umbilical regions. It is usually located in the left upper quadrant. It is bounded superiorly by the diaphragm and to the right by the liver, to the left by the spleen, posteriorly by the pancreas, right kidney. It is distal to the esophagus and enters into the small intestine (specifically, the duodenum). The stomach is about about 1 - 1.5l, but can get as large as 3l to accommodate food. The inner surface when non-distended usually has a lot of tiny folds called **rugae**. It is made of _4 parts_ and _2 sphincters_

## Parts


![parts of stomach](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Gray1046.svg/800px-Gray1046.svg.png)


The stomach is divided into 4 parts. From superior to inferior, they are:

1. Cardia - This is the first part of the stomach that the esophagus opens into. Between it and the fundus, there is a cardiac notch
2. Fundus - is the superior, small portion of the stomach that usually contains gases
3. Body - makes up the majority of the stomach
4. Pyloric Part - the last part of the stomach that opens into the duodenum


## Curvatures

These are the curves of the stomach and there are 2 of them: 
1. The Left Greater Curvature
2. The Right Lesser Curvature



## The Omenta

The stomach is also anatomically related to the greater and lesser omentum.
The  greater omentum (yellow) hangs off the inferior portion stomach (pylorus) like an apron to cover the intestines
The lesser omentum (green) connects the liver and stomach(superiorly)


![stomach and the omenta. lesser omentum is marked as green and greater omentum is yellow](https://i.ibb.co/ZBVqsWs/image.png)


## Sphincters

The stomach has two sphincters at both entrances. They are:
1. The Gastroesophageal sphincter - This is the upper sphincter that recieves food from the stomach.  It does not contain any actual sphincteric muscle but can still function because of these reasons:

	- The esophagus enters the stomach at an acute angle
	- The right crus of the diaphragm has a pinchcock effect on the esophagus
	- The intraabdominal pressure tends to compress the junction 

2. The Pyloric Sphincter - This is the lower / distal sphincter that passes food from the stomach to the duodenum. It contains sphincteric muscle that can prevent food from moving into the small intestine

 
# Histology

![histology of stomach](https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Anatomytool_Muscles_of_stomach_-_English.jpg/708px-Anatomytool_Muscles_of_stomach_-_English.jpg)


Like most of the gastrointestinal tract, the layers of the esophagus are divided into 4. From the superficial to deep:

1. Serosa(smooth tissue muscle) or Adventitia(fibrous tissue) Stomach - _serosa_
 2. Muscularis externa which in itself is made of two parts:
	 1. The OUTER Longitudinal Layer which relaxes and pulls food forward in the tract
	 2. The MIDDLE Circular Layer that contracts behind the food to move it 
	 3. The INNER Oblique Layer - unique to the stomach
2. Submucosa which contains connective tissue, blood vessels, nerves and lymphatics
3. Mucosa made of epithelial cells and sometimes, a thin muscularis mucosa because this is the layer that comes in direct contact with food. The stomach is lined by _simple columnar epithelium_



# Function

The stomach carries out some important functions like: 
1. Storage of Food
2. Peristalsis
3. Mechanical mixing of food
4. Digestion of Food (e.g. Proteins)
5. Secretion of Hormones and important factors (e.g. Intrinsic factor)
6. Protection of The Body (by gastric acid)

> **Peristalsis** refers to a set of coordinated, wave-like contractions that move food forward the alimentary canal. It usually happens by contraction of the circular layer of muscularis externa and the relaxation of the outer longitudinal muscularis interna to pull food forward

By far, the most important function of the stomach in the gastrointestinal tract is that it digests food. When food reaches the stomach, multiple receptors sense this and trigger the production of a few things, collectively known as **gastric juices**. Some of them are:

1. Gastric acid (HCl) from parietal cells - which helps in killing any bacteria in the food
2. Intrinsic factor from parietal cells - helps in the absorption of Vitamin B12
3. Mucus from mucus cells - helps to protect the gastric mucosa from the corrosive gastric acid
4. Pepsinogen from chief cells - The active form of this protein(pepsin) helps to digest proteins
5. Gastrin from G cells - help to increase gastric secretions and gastric motility

# Neurovasculature


![blood supply of stomach](https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Stomach_blood_supply.svg/640px-Stomach_blood_supply.svg.png)

1. Blood Supply is by these arteries:
	 - Short Gastric Artery
	 - Left Gastric Artery
	 - Right Gastric Artery
	 - Left Gastromental/epiploic Artery
	 - Right Gastromental/epiploic Artery
2. Venous Drainage follows arterial supply:
3. Lymphatic Drainage is by the **Superior and Inferior Gastric Lymph Nodes**
4. Innervation:
	- Parasympathetic innervation - Left and Right Vagal Trunks (Left - Anterior Surface, Right - Posterior Surface)
	- Sympathetic innervation - Greater Splanchnic Nerve(T6 - T9)


# Embryology

 - The stomach starts as a small protrusion of the gut tube with an anterior and posterior surface and it already has its left and right sides supplied by the left and right vagal nerves 
 - Over the next weeks, the posterior portion grows a lot faster than the anterior portion
 - At the 4th week of development, the stomach rotates 90deg *clockwise* on the anterior-posterior plane, bringing the anterior to the right (lesser curvature) and the posterior to the left(greater curvature), carrying the innervation with them   
- At the 7th week, the stomach  undergoes another rotation in the superior-inferior plane that brings the cranial part inferior and the caudal/pyloric part superiorly and to the right and then end result is that the stomach now lies almost transverse; in its final position

![embryology of stomach](https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-642-11202-7_110/MediaObjects/177639_1_En_110_Fig1_HTML.gif)



# Clinical Correlates

- Hiatal Hernia
- Achlorhydia

`


// COnfiguring Marked
marked.setOptions({
	"sanitizer": (text) => sanitize(text)
})



export const mdToHtml = (md = sampleMd): Promise<string> => {
    return new Promise((resolve, _) => {
        const res = z.string().safeParse(md)
        if (!res.success) throw Error('Invalid input')
        const md_ = res.data



        marked.parse(md_, (err, result) => {
            if (err) throw Error(err)

            return resolve(result as string)
        })
    })
}

export {}